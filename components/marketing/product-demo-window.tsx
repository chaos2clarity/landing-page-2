export default function ProductDemoWindow() {
  return (
    <div className="mt-12 relative">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
        <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Mathematical Equation Editor
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 mb-2">Write equations naturally:</p>
                  <div className="text-lg font-mono">E = mc²</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
