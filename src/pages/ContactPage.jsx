import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ім'я обов'язкове";
    if (!formData.email.includes('@')) newErrors.email = "Email має містити '@'";
    if (formData.message.length < 10) newErrors.message = "Повідомлення має бути не менше 10 символів";
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Форму відправлено успішно!");
      console.log("Дані форми:", formData);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4 border-0">
            <h2 className="text-center mb-4">Зворотний зв'язок</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Ваше ім'я</label>
                <input 
                  type="text" 
                  name="name"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  name="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback text-danger small mt-1">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Повідомлення</label>
                <textarea 
                  name="message"
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <div className="text-danger small mt-1">{errors.message}</div>}
              </div>

              <button type="submit" className="btn btn-primary w-100 py-2">
                Відправити
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}