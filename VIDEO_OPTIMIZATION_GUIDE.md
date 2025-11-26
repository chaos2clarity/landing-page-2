# Video Optimization Architecture Guide

## Current Problem
Your video file (`moveifdf.mp4`) is **147MB** for a 4-minute video. This is causing:
- Slow page loads
- High bandwidth usage
- Poor user experience, especially on mobile
- Increased hosting costs

## Recommended System Architecture

### 1. **Video Compression & Encoding** (CRITICAL - Do This First)

#### Option A: Use FFmpeg (Recommended)
```bash
# Install FFmpeg (if not installed)
# macOS: brew install ffmpeg

# Compress video with H.264 codec (best compatibility)
ffmpeg -i app/videos/moveifdf.mp4 \
  -c:v libx264 \
  -preset slow \
  -crf 23 \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  -vf "scale=1920:-2" \
  public/videos/moveifdf-optimized.mp4

# For web, also create a smaller version (720p)
ffmpeg -i app/videos/moveifdf.mp4 \
  -c:v libx264 \
  -preset slow \
  -crf 23 \
  -c:a aac \
  -b:a 96k \
  -movflags +faststart \
  -vf "scale=1280:-2" \
  public/videos/moveifdf-720p.mp4
```

**Expected Results:**
- Original: 147MB
- Optimized (1080p): ~15-25MB
- Optimized (720p): ~8-15MB

#### Option B: Use Online Tools
- **HandBrake** (GUI): https://handbrake.fr/
- **CloudConvert**: https://cloudconvert.com/
- **Veed.io**: https://www.veed.io/tools/video-compressor

### 2. **Video Hosting Architecture**

#### Tier 1: CDN + Video Hosting (Best Performance)
```
User → CDN Edge Server → Video Hosting Service
```

**Recommended Services:**
- **Vercel Blob Storage** (if using Vercel)
- **Cloudflare Stream** (excellent performance, pay-per-view)
- **AWS CloudFront + S3** (scalable, cost-effective)
- **Bunny.net** (affordable CDN with video optimization)
- **Mux** (premium, excellent developer experience)

#### Tier 2: Next.js Public Folder (Current - Not Recommended for Large Videos)
- ✅ Simple setup
- ❌ No CDN
- ❌ No adaptive bitrate
- ❌ Slower global delivery
- ❌ Uses your server bandwidth

### 3. **Progressive Loading Strategy** (Already Implemented)

The `OptimizedVideo` component now includes:
- ✅ **Lazy Loading**: Only loads when user scrolls near video
- ✅ **Intersection Observer**: Starts loading 200px before video enters viewport
- ✅ **Click-to-Load**: User can manually trigger loading
- ✅ **Loading States**: Shows progress indicator
- ✅ **Error Handling**: Retry mechanism

### 4. **Additional Optimizations**

#### A. Create Multiple Quality Versions
```typescript
// Future enhancement: Adaptive bitrate streaming
<OptimizedVideo
  sources={[
    { src: '/videos/moveifdf-1080p.mp4', quality: '1080p' },
    { src: '/videos/moveifdf-720p.mp4', quality: '720p' },
    { src: '/videos/moveifdf-480p.mp4', quality: '480p' },
  ]}
  // Component automatically selects based on connection speed
/>
```

#### B. Add Poster Image
```typescript
<OptimizedVideo
  src="/videos/moveifdf.mp4"
  poster="/images/video-poster.jpg" // First frame or custom thumbnail
  // ... other props
/>
```

#### C. Use WebM Format (Better Compression)
```bash
# Create WebM version (often 30-50% smaller than MP4)
ffmpeg -i app/videos/moveifdf.mp4 \
  -c:v libvpx-vp9 \
  -crf 30 \
  -b:v 0 \
  -c:a libopus \
  -b:a 96k \
  public/videos/moveifdf.webm
```

Then update component:
```typescript
<video>
  <source src="/videos/moveifdf.webm" type="video/webm" />
  <source src="/videos/moveifdf.mp4" type="video/mp4" />
</video>
```

### 5. **Implementation Priority**

#### Phase 1: Immediate (Do Now)
1. ✅ **Use OptimizedVideo component** (Already done)
2. 🔄 **Compress video** using FFmpeg (Target: <20MB)
3. 🔄 **Move video to `/public/videos/`** folder
4. 🔄 **Add poster image** (first frame or custom thumbnail)

#### Phase 2: Short-term (Next Week)
1. **Set up CDN** (Vercel Blob, Cloudflare, or Bunny.net)
2. **Create multiple quality versions** (1080p, 720p, 480p)
3. **Add WebM format** for better compression
4. **Implement adaptive bitrate** based on connection speed

#### Phase 3: Long-term (If Needed)
1. **Video streaming service** (Mux, Cloudflare Stream)
2. **HLS/DASH streaming** for very long videos
3. **Analytics** (track video engagement, drop-off points)

### 6. **Quick Win: Compress Your Current Video**

Run this command to compress your video immediately:

```bash
cd /Users/andersonchen/landing-page-2-1

# Create optimized version
ffmpeg -i app/videos/moveifdf.mp4 \
  -c:v libx264 \
  -preset medium \
  -crf 23 \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  -vf "scale=1920:-2" \
  public/videos/moveifdf-optimized.mp4

# Then update your component to use:
# src="/videos/moveifdf-optimized.mp4"
```

**Expected size reduction: 147MB → 15-25MB (85-90% reduction)**

### 7. **Performance Metrics to Monitor**

- **Time to First Frame**: Should be <2 seconds
- **Total Load Time**: Should be <5 seconds on 4G
- **Bandwidth Usage**: Should be <50MB for full video
- **Page Load Impact**: Video should not block page render

### 8. **Mobile Considerations**

- Use lower quality (720p) for mobile devices
- Detect connection speed and adjust quality
- Consider disabling autoplay on mobile (saves data)

## Next Steps

1. **Compress your video** using the FFmpeg command above
2. **Move compressed video** to `public/videos/` folder
3. **Update the src** in your component to use the optimized version
4. **Test the page** - you should see significant improvement

The `OptimizedVideo` component is already implemented and will handle lazy loading. The main bottleneck now is the file size itself.

