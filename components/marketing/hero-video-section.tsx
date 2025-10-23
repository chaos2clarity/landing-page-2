export default function HeroVideoSection() {
  return (
    <div className="mt-16 relative">
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
        <div className="aspect-video relative">
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer bg-gradient-to-br from-blue-600 to-purple-700">
            <div className="text-center text-white">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">See Clarity in Action</h3>
              <p className="text-white/80">Watch how easy it is to write math and science notes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
