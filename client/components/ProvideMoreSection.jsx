'use client'

import { Section, Container } from '.';

export default function ProvideMoreSection() {
  return (
    <Section background="gray">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Content */}
          <div className="pl-0 md:pl-8 lg:pl-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
              <span className="text-primary">»</span> Provide More In Less Time
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Rocket Flow has the most complete features for Facebook, Messenger, Instagram 
              and other marketing platforms that can outrun any other 3rd party tools existing today.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <span className="text-primary text-xl">✓</span>
                <span className="text-gray-700">Highly Interactive</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-xl">✓</span>
                <span className="text-gray-700">Human-like Conversation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-xl">✓</span>
                <span className="text-gray-700">Increase Engagement</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-xl">✓</span>
                <span className="text-gray-700">Increase Sales</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-xl">✓</span>
                <span className="text-gray-700">Automate Customer Support</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-xl">✓</span>
                <span className="text-gray-700">Collect Leads</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-xl">✓</span>
                <span className="text-gray-700">Sell Products</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-xl">✓</span>
                <span className="text-gray-700">Automate Restaurant Food Order</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-xl">✓</span>
                <span className="text-gray-700">Setup Chatbots Available 24/7</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-xl">✓</span>
                <span className="text-gray-700">Never Miss a Single Message</span>
              </div>
            </div>
          </div>

          {/* Right Side - Video/Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative h-[565px] w-[300px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100 p-8">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full rounded-2xl shadow-lg"
                >
                  <source src="/order_sample.webm" type="video/webm" />
                </video>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
