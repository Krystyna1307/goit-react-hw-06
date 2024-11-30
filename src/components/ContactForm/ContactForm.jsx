import s from "./ContactForm.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required(),
    number: Yup.string().required(),
  });

  const handleSubmit = (values, options) => {};

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            Name
            <Field className={s.input} type="text" name="name" />
          </label>
          <label>
            Number
            <Field className={s.input} type="tel" name="number" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
