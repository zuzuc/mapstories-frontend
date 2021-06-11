import React, { useState } from "react";
import axios from "axios";
import "./ClimateMigration.css";

/* ----------- beginning of FORMIK -------------- */
import { Form, Col, Button, Toast } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  region: yup.string(),
  country: yup.string().required(),
  locationName: yup.string().required(),
  title: yup.string().required(),
  story: yup.string().required(),
  image: yup.mixed(),
  email: yup.string().email().required(),
  nickname: yup.string().required(),
});
/* ----------- end of FORMIK -------------- */

function ClimateMigrationSubmit({ toggleSubmit, SubmitToast }) {
  // const {handleChange, handleSubmit, values, submitData} = ClimateMigrationUseForm()

  /* ------------------------- beginning of Without FORMIK ----------------------------*/
  // const [values2, setValues2] = useState({region: 'Eastern Caribbean', country: '', locationName: '', title: '', story: '', image: '', email: '', nickname: ''});
  // // const [errors, setErrors] = useState({});

  // const handleChange2 = e => {
  //     const { name, value2 } = e.target;
  //     setValues2({
  //         ...values2,
  //         [name]: value2
  //     });
  //     console.log(values2)
  // };
  /* ------------------------- end of Without FORMIK ----------------------------*/
  const [show, setShow] = useState(false);
  const postUrl = "/api/posts";
  const handleSubmit2 = ({ values }) => {
    // e.preventDefault();
    axios
      .post(postUrl, {
        region: values.region,
        country: values.country,
        locationName: values.locationName,
        title: values.title,
        story: values.story,
        image: values.image,
        email: values.email,
        nickname: values.nickname,
      })
      .then((res) => {
        console.log("POST", res.data);
      });
  };

  return (
    <div>
      <div>
        {/* ------------------------- beginning of Without FORMIK ----------------------------*/
        /* <form onSubmit={(e)=> handleSubmit2(e)}>
                <h2>Share your stories!</h2>
                <div>
                    <label htmlFor="region">Choose the region of your countries</label>
                        <select id="region" name="region" value={values2.region} onChange={handleChange2} default=''>
                            <option value='Eastern Caribbean'>Eastern Caribbean</option>
                            <option value='South Pacific'>South Pacific</option>
                            <option value='West Pacific'>West Pacific</option>
                            <option value='West Africa'>West Africa</option>
                            <option value='East Africa'>East Africa</option>
                        </select>
                </div>
                <div>
                    <label htmlFor="country">Name of Country</label>
                    <input id="country" type="text" name="country" placeholder="Write down your country" value={values2.country} onChange={handleChange2} />
                </div>
                <div>
                    <label htmlFor="locationName">Name of City / Village</label>
                    <input id="locationName" type="text" name="locationName" placeholder="Write down your city / village" value={values2.locationName} onChange={handleChange2} />
                </div>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" name="title" placeholder="title" value={values2.title} onChange={handleChange2} />
                </div>
                <div>
                    <label htmlFor="story">Story</label>
                    <input id="story" type="text" name="story" placeholder="Share your stories here!" value={values2.story} onChange={handleChange2} />
                </div>
                <div>
                    <label htmlFor="image">Image URL</label>
                    <input id="image" type="text" name="image" placeholder="Write down your picture URL" value={values2.image} onChange={handleChange2}/>                    
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="Write down your email" value={values2.email} onChange={handleChange2}/>
                </div>
                <div>
                    <label htmlFor="nickname">Nickname</label>
                    <input id="nickname" type="text" name="nickname" placeholder="Write down your nickname" value={values2.nickname} onChange={handleChange2}/>
                </div>
                <button type="submit">Submit</button>
            </form> */
        /* ------------------------- end of Without FORMIK ----------------------------*/}
      </div>
      {/* ----------- beginning of FORMIK -------------- */}
      <div style={{ width: 600, backgroundColor: "#faf1e8", color: "#00303f", margin: "5rem", paddingLeft: "4rem", paddingTop: "2rem"  }}>
        <div>
          <Formik
            validationSchema={schema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // When button submits form and form is in the process of submitting, submit button is disabled
              setSubmitting(true);
              // Submitting to Database and resetting the input value
              setTimeout(() => {
                handleSubmit2({ values });
                resetForm();
                setSubmitting(false);
                setShow(true);
              }, 500);
            }}
            initialValues={{
              region: "Eastern Caribbean",
              country: "",
              locationName: "",
              title: "",
              story: "",
              image: "",
              email: "",
              nickname: "",
            }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              touched,
              isValid,
              errors,
              isSubmitting,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group as={Col} md="10">
                  <Form.Label htmlFor="region">Name of Region</Form.Label>
                  <Form.Control
                    as="select"
                    id="region"
                    name="region"
                    value={values.region}
                    onChange={handleChange}
                    custom
                  >
                    <option value="Eastern Caribbean">Eastern Caribbean</option>
                    <option value="South Pacific">South Pacific</option>
                    <option value="West Pacific">West Pacific</option>
                    <option value="West Africa">West Africa</option>
                    <option value="East Africa">East Africa</option>
                  </Form.Control>
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} md="5">
                    <Form.Label htmlFor="country">Name of Country</Form.Label>
                    <Form.Control
                      id="country"
                      type="text"
                      name="country"
                      placeholder="Write down your country"
                      value={values.country}
                      onChange={handleChange}
                      isValid={touched.country && !errors.country}
                      isInvalid={!!errors.country}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="5">
                    <Form.Label htmlFor="locationName">
                      Name of City / Village
                    </Form.Label>
                    <Form.Control
                      id="locationName"
                      type="text"
                      name="locationName"
                      placeholder="Write down your city or village"
                      value={values.locationName}
                      onChange={handleChange}
                      isValid={touched.locationName && !errors.locationName}
                      isInvalid={!!errors.locationName}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Group as={Col} md="10">
                  <Form.Label htmlFor="title">Title of your story</Form.Label>
                  <Form.Control
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Write down title of your story"
                    value={values.title}
                    onChange={handleChange}
                    isValid={touched.title && !errors.title}
                    isInvalid={!!errors.title}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="10">
                  <Form.Label htmlFor="story">Your story here!</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    id="story"
                    type="text"
                    name="story"
                    placeholder="story"
                    value={values.story}
                    onChange={handleChange}
                    isValid={touched.story && !errors.story}
                    isInvalid={!!errors.story}
                  />
                  <Form.Control.Feedback>'Looks good!'</Form.Control.Feedback>
                </Form.Group>

                {/* <Form.Group>
                  <Form.File
                    className="position-relative"
                    name="image"
                    label="Image"
                    onChange={handleChange}
                    isInvalid={!!errors.file}
                    feedback={errors.file}
                    feedbackTooltip
                  />
                </Form.Group> */}

                <Form.Group as={Col} md="10">
                  <Form.Label htmlFor="image">Image URL</Form.Label>
                  <Form.Control
                    id="image"
                    type="text"
                    name="image"
                    placeholder="Write down your image URL"
                    value={values.image}
                    onChange={handleChange}
                    isValid={touched.image && !errors.image}
                    isInvalid={!!errors.image}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} md="5">
                    <Form.Label htmlFor="email">Email Address</Form.Label>
                    <Form.Control
                      id="email"
                      type="email"
                      name="email"
                      placeholder="example@example.com"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="5">
                    <Form.Label htmlFor="nickname">Nickname</Form.Label>
                    <Form.Control
                      id="nickname"
                      type="text"
                      name="nickname"
                      placeholder="Write down your nickname"
                      value={values.nickname}
                      onChange={handleChange}
                      isValid={touched.nickname && !errors.nickname}
                      isInvalid={!!errors.nickname}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Button type="submit" disabled={isSubmitting} className="submit-btn">
                  Submit form
                </Button>
              </Form>
            )}
          </Formik>
          {/* ----------- end of FORMIK -------------------- */}
        </div>
        {/* ----------- beginning of Toast Message clicking Submit Button -------------------- */}
        <div>
          <Col xs={6}>
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <strong>Thanks for sharing your story!</strong>
                <p>
                  We will review your submitted story and publish it as long as
                  it does not violate our policies.
                </p>
              </Toast.Header>
            </Toast>
          </Col>
        </div>
        {/* ----------- end of Toast Message clicking Submit Button -------------------- */}
      </div>
    </div>
  );
}

export default ClimateMigrationSubmit;

/*
const handleSubmit=(e)=> {
    e.preventDefault();
    // const postUrl = 'http://localhost:5000/users';
    const postUrl = 'https://blooming-lowlands-37264.herokuapp.com';
    fetch(postUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: this.name,
            height: this.height,
            strength: this.strength,
            age: this.age,
            iq: this.iq,
            funnyness: this.funnyness
        })
    })
    .then(()=>{
        alert('Completed!');
    })
}
*/

// const submitData = async () => {
//     try {
//         const result = await fetch('http://localhost:5000/posts', {
//             method: 'post',
//             mdoe: 'no-cors',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 region: '',
//                 country: '',
//                 locationName: '',
//                 title: '',
//                 story: '',
//                 image: '',
//                 email: '',
//                 nickname: ''
//             })
//         })
//         console.log(result)
//     } catch(err) {
//         console.log(err)
//     }
// };
