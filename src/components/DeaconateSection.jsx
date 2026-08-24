import React from 'react';
import { churchData } from '../data/churchData';

export default function ChurchDeaconate() {
  const { deaconate } = churchData.leadership;

  return (
    <section className="py-12 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-red-700 tracking-wide uppercase">
            Church Deaconate
          </h2>
          <p className="text-gray-600 mt-2">
            Serving God and His people at {churchData.basicInfo.name}
          </p>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* Deacons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {deaconate.map((deacon) => (
            <div
              key={deacon.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center p-6 text-center"
            >
              {/* Profile Image with Fallback */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-red-50 shadow-inner bg-gray-100 flex items-center justify-center">
                <img
                  src={deacon.image}
                  alt={deacon.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/150?text=Deacon";
                  }}
                />
              </div>

              {/* Deacon Info */}
              <h3 className="text-xl font-bold text-gray-900">{deacon.name}</h3>
              <span className="inline-block mt-1 px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full uppercase">
                {deacon.title}
              </span>

              {/* Phone Link */}
              <div className="mt-4 pt-4 border-t border-gray-100 w-full">
                <a
                  href={`tel:${deacon.phone}`}
                  className="inline-flex items-center text-sm text-gray-600 hover:text-red-700 font-medium transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {deacon.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}