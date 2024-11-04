import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Palette, Sparkles } from 'lucide-react';
import Navigation from './components/Navigation';
import ServiceCard from './components/ServiceCard';
import QuestionForm from './components/QuestionForm';
import { services, questionnaires } from './data/services';
import { FormData } from './types';

function App() {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState<FormData>({ serviceId: '', answers: {} });
  const [submitted, setSubmitted] = useState(false);

  const currentQuestionnaire = questionnaires.find(q => q.serviceId === selectedService);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form submitted:', formData);
  };

  const handleAnswer = (questionId: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      serviceId: selectedService,
      answers: { ...prev.answers, [questionId]: value }
    }));
  };

  if (submitted) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-[#A1CC3A]" />
              <h2 className="mt-4 text-3xl font-bold text-[#676767]">Thank you!</h2>
              <p className="mt-2 text-lg text-[#676767]">
                We've received your responses and will get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setSelectedService('');
                  setFormData({ serviceId: '', answers: {} });
                  setSubmitted(false);
                }}
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#A0268A] hover:bg-[#8a1f76]"
              >
                Start New Request
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-6">
              <Palette size={40} className="text-[#A0268A]" />
              <Sparkles size={40} className="text-[#A1CC3A]" />
            </div>
            <h1 className="text-4xl font-bold text-[#676767] mb-4">
              How can we help you today?
            </h1>
            <p className="text-lg text-[#676767]">
              Select a service to get started with your custom questionnaire
            </p>
          </div>

          {!selectedService ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  selected={selectedService === service.id}
                  onClick={() => setSelectedService(service.id)}
                />
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <button
                onClick={() => setSelectedService('')}
                className="mb-8 text-[#A0268A] hover:text-[#8a1f76] font-medium flex items-center"
              >
                ← Back to services
              </button>
              
              {currentQuestionnaire && (
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-[#676767] mb-2">
                    {currentQuestionnaire.title}
                  </h2>
                  <p className="text-[#676767] mb-8">{currentQuestionnaire.description}</p>
                  
                  <form onSubmit={handleSubmit}>
                    {currentQuestionnaire.questions.map((question) => (
                      <QuestionForm
                        key={question.id}
                        question={question}
                        value={formData.answers[question.id] || ''}
                        onChange={(value) => handleAnswer(question.id, value)}
                      />
                    ))}
                    
                    <button
                      type="submit"
                      className="w-full mt-8 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#A0268A] hover:bg-[#8a1f76] md:py-4 md:text-lg md:px-10"
                    >
                      Submit Request
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;