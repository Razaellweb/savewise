export default function OrderBook() {
  return (
    <div className="relative min-h-[600px] rounded-t-xl bg-white p-8 shadow-2xl">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b border-teal-100 pb-4">
        <div>
          <h2 className="text-2xl font-semibold text-teal-900">Loan Order Book</h2>
          <p className="text-sm text-teal-600">Live P2P lending marketplace</p>
        </div>
        <button className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700">
          + New Request
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6 flex gap-2">
        <button className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white">
          All Orders
        </button>
        <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-600 hover:bg-gray-200">
          Borrow Requests
        </button>
        <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-600 hover:bg-gray-200">
          Lend Offers
        </button>
      </div>

      {/* Order List */}
      <div className="space-y-3">
        {/* Order 1 - Borrow Request */}
        <div className="rounded-xl border border-teal-200 bg-gradient-to-r from-teal-50/30 to-white p-4 transition-all hover:shadow-md">
          <div className="mb-3 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-teal-900">₦500,000</div>
                <div className="text-xs text-teal-600">Borrow Request</div>
              </div>
            </div>
            <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              OPEN
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-xs text-teal-600">Interest Rate</div>
              <div className="font-medium text-teal-900">0.35% daily</div>
            </div>
            <div>
              <div className="text-xs text-teal-600">Tenor</div>
              <div className="font-medium text-teal-900">14 days</div>
            </div>
            <div>
              <div className="text-xs text-teal-600">Collateral</div>
              <div className="font-medium text-teal-900">USDT</div>
            </div>
            <div>
              <div className="text-xs text-teal-600">LTV</div>
              <div className="font-medium text-green-600">135%</div>
            </div>
          </div>
        </div>

        {/* Order 2 - Lend Offer */}
        <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50/30 to-white p-4 transition-all hover:shadow-md">
          <div className="mb-3 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-teal-900">₦2,000,000</div>
                <div className="text-xs text-blue-600">Lend Offer</div>
              </div>
            </div>
            <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              AVAILABLE
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-xs text-teal-600">Interest Rate</div>
              <div className="font-medium text-teal-900">0.42% daily</div>
            </div>
            <div>
              <div className="text-xs text-teal-600">Max Tenor</div>
              <div className="font-medium text-teal-900">30 days</div>
            </div>
            <div>
              <div className="text-xs text-teal-600">Min. Collateral</div>
              <div className="font-medium text-teal-900">USDC/USDT</div>
            </div>
            <div>
              <div className="text-xs text-teal-600">Available</div>
              <div className="font-medium text-teal-900">₦2.0M</div>
            </div>
          </div>
        </div>

        {/* Order 3 - Borrow Request */}
        <div className="rounded-xl border border-teal-200 bg-gradient-to-r from-teal-50/30 to-white p-4 transition-all hover:shadow-md">
          <div className="mb-3 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-teal-900">₦1,200,000</div>
                <div className="text-xs text-teal-600">Borrow Request</div>
              </div>
            </div>
            <div className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
              MATCHING
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-xs text-teal-600">Interest Rate</div>
              <div className="font-medium text-teal-900">0.38% daily</div>
            </div>
            <div>
              <div className="text-xs text-teal-600">Tenor</div>
              <div className="font-medium text-teal-900">21 days</div>
            </div>
            <div>
              <div className="text-xs text-teal-600">Collateral</div>
              <div className="font-medium text-teal-900">USDC</div>
            </div>
            <div>
              <div className="text-xs text-teal-600">LTV</div>
              <div className="font-medium text-green-600">135%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Footer */}
      <div className="mt-6 grid grid-cols-3 gap-4 rounded-lg bg-teal-50 p-4">
        <div className="text-center">
          <div className="text-xs text-teal-600">Active Orders</div>
          <div className="text-xl font-bold text-teal-900">47</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-teal-600">24h Volume</div>
          <div className="text-xl font-bold text-teal-900">₦12.4M</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-teal-600">Avg. Rate</div>
          <div className="text-xl font-bold text-teal-900">0.39%</div>
        </div>
      </div>
    </div>
  );
}
