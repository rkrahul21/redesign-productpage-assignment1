import React from 'react';

const SocialProofSection: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              quote: "gogetwell.ai has transformed our patient management process. The AI tools are incredibly efficient.",
              author: "Dr. Jane Smith",
              role: "Healthcare Facilitator"
            },
            {
              quote: "The platform's ease of use and powerful features have significantly improved our operations.",
              author: "John Doe",
              role: "Hospital Administrator"
            },
            {
              quote: "A game-changer for medical tourism. Highly recommended!",
              author: "Sarah Johnson",
              role: "Patient Coordinator"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="font-semibold text-gray-900">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {[1, 2, 3, 4, 5].map((logo) => (
            <div key={logo} className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Logo {logo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection; 