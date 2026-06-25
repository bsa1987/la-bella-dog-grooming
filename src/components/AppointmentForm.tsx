import { useState, FormEvent } from 'react';
import { CalendarDays, CheckCircle, AlertCircle, Phone } from 'lucide-react';

type FormState = {
  name: string;
  phone: string;
  email: string;
  dogName: string;
  breed: string;
  service: string;
  preferredDate: string;
  notes: string;
};

const empty: FormState = {
  name: '', phone: '', email: '', dogName: '',
  breed: '', service: '', preferredDate: '', notes: '',
};

const services = ['Full Groom', 'Bath & Dry', 'Puppy Groom', 'Nail Trim', 'Deshedding', 'Teeth Cleaning'];

export default function AppointmentForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const res = await fetch(`${apiUrl}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || 'Submission failed');

      setStatus('success');
      setForm(empty);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="appointment" className="py-24 bg-white">
        <div className="max-w-xl mx-auto px-6 sm:px-8 text-center">
          <div className="bg-blush-50 rounded-3xl p-14 border border-blush-100">
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={28} className="text-green-500" />
            </div>
            <h2 className="font-serif text-3xl text-charcoal-900 mb-4">Thank You!</h2>
            <p className="text-charcoal-600 text-sm leading-relaxed mb-8">
              We've received your request and will be in touch shortly to confirm your appointment. A confirmation email is on its way.
            </p>
            <a href="tel:07912345678" className="btn-primary justify-center">
              <Phone size={16} />
              Call to Confirm: 07912 345678
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Get in Touch</p>
          <h2 className="section-heading mb-4">Request an Appointment</h2>
          <p className="text-charcoal-500 text-sm">
            Fill in the form and we'll confirm your booking. Prefer to call?{' '}
            <a href="tel:07912345678" className="text-blush-500 font-medium">07912 345678</a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-blush-50 rounded-3xl border border-blush-100 p-8 md:p-12 space-y-5">
          {/* Row 1 */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="label">Your Name *</label>
              <input required className="input-field" placeholder="Full name" value={form.name} onChange={set('name')} />
            </div>
            <div>
              <label className="label">Phone Number *</label>
              <input required type="tel" className="input-field" placeholder="07xxx xxxxxx" value={form.phone} onChange={set('phone')} />
            </div>
          </div>

          {/* Row 2 */}
          <div>
            <label className="label">Email Address *</label>
            <input required type="email" className="input-field" placeholder="your@email.com" value={form.email} onChange={set('email')} />
          </div>

          {/* Row 3 */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="label">Dog's Name *</label>
              <input required className="input-field" placeholder="What's your dog called?" value={form.dogName} onChange={set('dogName')} />
            </div>
            <div>
              <label className="label">Breed *</label>
              <input required className="input-field" placeholder="e.g. Cockapoo, Labrador" value={form.breed} onChange={set('breed')} />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="label">Service Required *</label>
              <div className="relative">
                <select required className="select-field" value={form.service} onChange={set('service')}>
                  <option value="">Select a service</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-400">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
              </div>
            </div>
            <div>
              <label className="label">Preferred Date *</label>
              <input
                required
                type="date"
                className="input-field"
                min={new Date().toISOString().split('T')[0]}
                value={form.preferredDate}
                onChange={set('preferredDate')}
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="label">Additional Notes</label>
            <textarea
              className="input-field resize-none"
              rows={3}
              placeholder="Anything else we should know?"
              value={form.notes}
              onChange={set('notes')}
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-xl px-4 py-3 text-sm">
              <AlertCircle size={15} />
              {errorMsg || 'Something went wrong. Please try again or call us.'}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            <CalendarDays size={17} />
            {status === 'submitting' ? 'Sending…' : 'Request Appointment'}
          </button>
        </form>
      </div>
    </section>
  );
}
