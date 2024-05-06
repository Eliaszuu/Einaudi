import  { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Hier können Sie die Logik zum Senden des Formulars implementieren
        console.log(formData);
    };

    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Kontaktiere uns</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">E-Mail</label>
                                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Nachricht</label>
                                <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Senden</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
