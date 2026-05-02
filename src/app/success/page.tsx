"use client";

import Link from "next/link";

export default function SuccessPage() {
    return (
          <div className="min-h-screen bg-slate-900 text-white flex flex-col">
            {/* Navigation */}
                <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-40">
                        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                                  <h1 className="text-xl font-bold text-cyan-400">Pro Meta Ads</h1>h1>
                        </div>div>
                </nav>nav>
          
            {/* Content */}
                <main className="flex-1 flex items-center justify-center px-6 py-20">
                        <div className="text-center max-w-2xl">
                                  <div className="mb-8">
                                              <svg
                                                              className="w-20 h-20 mx-auto text-green-400"
                                                              fill="none"
                                                              stroke="currentColor"
                                                              viewBox="0 0 24 24"
                                                            >
                                                            <path
                                                                              strokeLinecap="round"
                                                                              strokeLinejoin="round"
                                                                              strokeWidth={2}
                                                                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                            />
                                              </svg>svg>
                                  </div>div>
                                  <h1 className="text-4xl font-bold mb-4">Thank You!</h1>h1>
                                  <p className="text-xl text-slate-300 mb-2">
                                              Your inquiry has been successfully submitted.
                                  </p>p>
                                  <p className="text-slate-400 mb-8">
                                              Our team will review your information and contact you shortly at the email address provided.
                                  </p>p>
                                  <div className="flex gap-4 justify-center">
                                              <Link
                                                              href="/"
                                                              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors"
                                                            >
                                                            Back to Home
                                              </Link>Link>
                                  </div>div>
                        </div>div>
                </main>main>
          
            {/* Footer */}
                <footer className="bg-slate-800 border-t border-slate-700 py-6">
                        <div className="max-w-6xl mx-auto px-6 text-center text-slate-400">
                                  <p>&copy; 2024 Pro Meta Ads. All rights reserved.</p>p>
                        </div>div>
                </footer>footer>
          </div>div>
        );
}</div>
