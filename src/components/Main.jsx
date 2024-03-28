import facebookImg from '../assets/facebook-logo.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Main = () => {
  return (
    <>
      <main className='d-flex  align-items-center justify-content-center'>
        {/* parent-div */}
        <div className='main-container row justify-content-between align-items-center w-lg-75 m-auto container'>
          {/* first div */}
          <div className='col-lg-6 mb-lg-5'>
            <img src={facebookImg} alt='facebook-logo' className='img-fluid' />
            <h2 className='lh-sm'>
              Facebook helps you connect and share with the people in your life
            </h2>
          </div>

          {/* second div */}
          <div className='col-lg-5'>
            <Form className='form-wrapper  border p-4 bg-light shadow rounded-3'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='email'
                  placeholder='Email address or phone number'
                />
                <Form.Text className='text-muted'></Form.Text>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>

              <Button
                variant='primary'
                className='fw-bold w-100 px-3 '
                type='submit'
              >
                Log in
              </Button>

              {/* forgotten password */}
              <div className='forgotten-password text-center mt-2'>
                <a
                  href='#'
                  target='blank'
                  className=' text-primary text-decoration-none'
                >
                  Forgotten password?
                </a>
              </div>

              {/* line */}
              <div className='horizontal-line'>
                <hr />
              </div>

              {/* Create new account */}
              <div className='text-center'>
                <Button
                  variant='success'
                  className='fw-bold px-3 create-btn'
                  type='submit'
                >
                  Create new account
                </Button>
              </div>
            </Form>

            {/* div create page */}
            <div className='create-page text-center mt-3'>
              <p>
                <a
                  href='#'
                  target='blank'
                  className=' hover-effect  me-1 fw-bold'
                >
                  Create a Page
                </a>
                for a celebrity, brand or business.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className='container w-75 mt-4 m-auto'>
        {/* top */}
        <div className='footer-heading'>
          <p>
            English (UK) Hausa Français (France) Português (Brasil) Español
            العربية Bahasa Indonesia Deutsch 日本語 Italiano हिन्दी
          </p>
        </div>
        <hr />
        {/* bottom */}
        <div className='footer-bottom'>
          <p>
            Sign UpLog inMessengerFacebook LiteVideoPlacesGamesMarketplaceMeta
            PayMeta StoreMeta QuestImagine with Meta
            AIInstagramThreadsFundraisersServicesVoting Information
            CentrePrivacy PolicyPrivacy CentreGroupsAboutCreate adCreate
            PageDevelopersCareersCookiesAdChoicesTermsHelpContact uploading and
            non-usersSettingsActivity log Meta © 2024
          </p>
        </div>
      </footer>
    </>
  );
};

export default Main;
