import React, {PureComponent} from 'react';

import "./social.css"

import insta from "./instagram_image.png"
import telega from "./Telegram_image.png"
import vk from "./VK_image.png"
import ws from "./WhatsApp_Image.png"

class Social extends PureComponent {
  render() {
    return (

      <address>
        <ul style={{"margin":"0"}} className="social-icons">
          <li>
            <a href="https://instagram.com/cosmetolog_sulaberidze_samara?igshid=YmMyMTA2M2Y=" title="instagram"
               target="_blank" rel="noopener">
              <img className="social-icon-image" src={insta}/>
            </a>
          </li> <li>
            <a href="https://telegram.im/@Asiya_sulaberidze" title="telegram" target="_blank" rel="noopener">
              <img className="social-icon-image" src={telega}/>
            </a>
          </li> <li>
            <a href="https://api.whatsapp.com/send?phone=79297072871" title="WhatsApp" target="_blank" rel="noopener">
              <img className="social-icon-image" src={ws}/>
            </a>
          </li> <li>
            <a href="https://vk.com/kosmetolog_ar" title="VK" target="_blank" rel="noopener">
              <img className="social-icon-image" src={vk}/>
            </a>
          </li>
        </ul>
     </address>
    );
  }
}


export default Social;
