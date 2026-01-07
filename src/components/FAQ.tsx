import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Will this make me lose muscle?',
    answer: 'No. Our program is designed to protect and increase muscle mass while reducing fat.',
  },
  {
    question: 'Are treatments painful or surgical?',
    answer: 'No. They are safe, comfortable and non-invasive with no downtime.',
  },
  {
    question: 'How soon will I see results?',
    answer: 'Many clients notice visible inch loss within 2 to 3 weeks.',
  },
  {
    question: 'Do I need strict dieting?',
    answer: 'No. Your plan is designed around your lifestyle. We promote realistic, sustainable habits.',
  },
  {
    question: 'Will the results last?',
    answer: 'Yes. Because the program focuses on metabolic correction and muscle gain, your fat-loss becomes sustainable.',
  },
  {
    question: 'Is this suitable for people above 40?',
    answer: 'Absolutely. In fact, people above 40 see tremendous benefits when metabolism and muscle strength are restored.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
