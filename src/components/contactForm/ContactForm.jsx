import React, {useState,useEffect} from 'react';
import "./contactForm.css"

function ContactForm(props) {

  const [modalOpen, setModalOpen] = useState(false);

  const useValidation = (value, validations)=>{
    const[minLengthError, setMinLengthError] = useState(false)
    const[maxLengthError, setMaxLengthError] = useState(false)
    const[phoneError, setPhoneError] = useState(false)
    const[inputValid, setInputValid] = useState(false)

    useEffect(()=>{
      for (const validation in validations) {
        switch (validation) {
          case 'minLength':
            value.length<validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
            break;
          case 'maxLength':
            value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
            break;
          case 'isPhone':
            const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
            re.test(String(value).toLowerCase()) ? setPhoneError(false) : setPhoneError(true)
            break;
        }
      }
    },[value])

    useEffect(()=>{
      if(phoneError) {
        setInputValid(false)
      } else {
        setInputValid(true)
      }
    }, [phoneError])

    return {
      minLengthError,
      phoneError,
      maxLengthError,
      inputValid,
    }

  }

  const  useInput = (initialValue, validations)=>{
    const[value, setValue] = useState(initialValue)
    const[isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)
    const onChange = (e) => {
      setValue(e.target.value)
    }

    const onBlur = (e) => {
      setDirty(true)
    }

    return {
      value,
      onChange,
      onBlur,
      isDirty,
      ...valid
    }
  }

  function goToEmail (e){
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const url = "https://api.whatsapp.com/send?phone=+79297072871&text=+"
    + "Имя: " + name + "%0a"
    + "Телефон: " + phone + "%0a"
    + "Сообщение: " + message  + "%0a"
    +encodeURIComponent(message)


    window.open(url, '_blank').focus();
  }

  // function cleanForm (e){
  //     e.preventDefault();
  //     e.target.reset();
  //     setModalOpen(false)
  //   }

  function openForm(){
     setModalOpen(true)
  }

  const phone = useInput('', {isEmpty:true, isPhone: true,})

  return (
    <div className="contactForm__content">
      <div className="register" style={modalOpen?
        {'display': "block"}:{'display': "none"}}>
        {modalOpen && (
          <div className="container">
              <div className="tab-pane fade show active" id="home" role="tabpanel"
                   aria-labelledby="home-tab">
                <h4 className="register-heading text-nowrap">Заполните для<br/>WhatsApp</h4>
                <div className="register-form">
                    <form method="post" id="myForm"
                          // autoComplete="off"
                          target="_blank"
                          onSubmit={(e)=>goToEmail(e)}
                    >
                      <i className="material-icons right formBtn__close"
                      onClick={()=>setModalOpen(false)}>close</i>
                      <div className="form-group">
                        <input type="text" name="name" id="name" className="form-control"
                               placeholder="Ваше имя *" required="true" />
                      </div>
                      <div className="form-group">
                        {(phone.isDirty && phone.phoneError) && <div style = {{color:'red'}}>{'Некорректный номер'}</div>}
                        <input onChange={e=>phone.onChange(e)}
                               onBlur={e=>phone.onBlur(e)}
                               type="tel" name="phone" id="phone"
                               className="form-control"
                               placeholder="Ваш контактный номер *"
                               required="true"/>
                      </div>
                      <div className="form-group">
                        <input type="text" name="message" id="message" className="form-control"
                               placeholder="Сообщение *" required="false" />
                      </div>
                      <div className="form-group">
                        <input disabled={!phone.inputValid}
                               type="submit" name="submit"
                               className="btnSubmit btn-block"
                               value="Отправить"/>
                      </div>
                    </form>
                </div>
              </div>
          </div>
        )}
      </div>

      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

      <span onClick={()=>openForm()}
            className="float"
            style={!modalOpen?
              {'display': "block"}:{'display': "none"}}>
        <img
          src="https://trickuweb.com/whatsapp.png"
          alt="collbak whatsapp"
          height="60px"
          width="60px"
        />
      </span>
    </div>
  );
}

export default ContactForm;
