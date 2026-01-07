import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What makes Lifescc different from other weight loss programs?',
    answer: 'Lifescc focuses on both fat reduction and muscle building simultaneously under medical supervision. Unlike generic weight loss programs, we analyze your body composition, metabolism, and hormonal balance to create a personalized plan that delivers sustainable results.',
  },
  {
    question: 'Is the body assessment really free?',
    answer: 'Yes, the initial body assessment and consultation are completely free with no obligation to start any treatment. We want you to understand your body first and make an informed decision.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Most clients start noticing changes in energy levels and body composition within 3-4 weeks. Visible fat reduction and muscle toning typically become apparent within 8-12 weeks, depending on individual body response and adherence to the program.',
  },
  {
    question: 'Do I need to follow a strict diet or workout plan?',
    answer: 'Our approach is personalized and practical. We create plans that fit your lifestyle, not the other way around. While dietary guidance and movement recommendations are provided, they are designed to be sustainable and realistic for your daily routine.',
  },
  {
    question: 'Is this program safe? Are there any side effects?',
    answer: 'All Lifescc programs are medically supervised and designed with safety as the top priority. Your progress is monitored by trained doctors throughout the journey. Any recommendations are based on your individual health assessment.',
  },
  {
    question: 'What happens after I complete the program?',
    answer: 'Lifescc is designed to create lasting change in how your body functions. After completing your program, you receive maintenance guidance to help you sustain your results. Many clients continue with periodic check-ins to ensure long-term success.',
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
