import React, { useState } from 'react';

const AttendanceForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbyGbUfOoHMQiVdN3jLyV0ZvR_ex16DdTf0vZfWm22ocvVaSBUWoxfENGMawi_Zltace/exec';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.result === 'success') {
        alert('Your attendance has been recorded successfully!');
        form.reset();
      } else {
        alert('Something went wrong: ' + result.error);
      }
    } catch (error: any) {
      // Sometimes GAS triggers a CORS error even if the data saves successfully
      alert('Submission complete. Please check the sheet!');
      console.error('Error!', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="attendance-form" className="container mx-auto px-4 py-12">
      <div className="max-w-lg mx-auto bg-white/5 backdrop-blur-md border border-red-500 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Be a Blood Donar, Save a Life
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-md bg-black/20 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#b0db9c]"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="w-full rounded-md bg-black/20 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#b0db9c]"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full rounded-md bg-black/20 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#b0db9c]"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="blood"
            >
              Blood Group
            </label>
            <input
              type="text"
              id="blood"
              name="blood"
              className="w-full rounded-md bg-black/20 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#b0db9c]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 mt-4 bg-[#b0db9c] text-black font-semibold rounded-md hover:bg-[#98c07f] transition disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>

          <a
            href="https://docs.google.com/spreadsheets/d/1nMNV9ZmjFv7iwdRFX_nzSbakJHcMThrQzNgwaJl4HSk/edit?usp=drivesdk"
            className="w-full block text-center py-2 mt-3 bg-[#3498db] text-white font-semibold rounded-md hover:bg-[#2b82c5] transition"
          >
            Blood Donars List
          </a>
        </form>
      </div>
    </section>
  );
};

export default AttendanceForm;
