import React from 'react';
import Emmy from '../../../Image/Avatar.png';
import Avatars from '../../../Image/User/none.png';
import ReactDOM from 'react-dom';
import { BsArrowReturnLeft, BsThreeDots, BsMic } from 'react-icons/bs';
import { VscBracketError } from 'react-icons/vsc';
import { FiSearch } from 'react-icons/fi';
import assistant_music from '../Music/assistant.mp3';
import { MdOutlineDataExploration } from 'react-icons/md';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { TiMicrophoneOutline } from 'react-icons/ti';
import { HiOutlineDatabase } from 'react-icons/hi';
import { BiMenuAltRight, BiSend } from 'react-icons/bi';


const Modal = ({ isShowing, hide }) => {

//date
var now = new Date();
const days = ['day_1','day_2','day_3','day_4','day_5','day_6','day_7'];
const dayName = days[now.getDay()];
const Date_show = new Date().toLocaleDateString();
const Time_show = new Date().toLocaleTimeString();


return(
isShowing ? ReactDOM.createPortal(

  <React.Fragment>
    <div className="Modals-overlay_assistant"/>
    <div className="Modals-wrapper_assistant" aria-Modals aria-hidden tabIndex={-1} role="dialog">
      <div className="Modals_assistant">
        <div className="Modals-header_assistant">
          <button type="button" className="Modals-close-button_assistant" data-dismiss="Modals" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
       
           <span className="Assistant_span_bacckground_sp_fl_fl">
     <div className="Assistant_background_chat">
{/*           <div className="Assistant_time">
            <span>{Time_show}</span>
          </div>
          <span id="name_Emmy"></span>
          <span className="status_Emmy"></span>*/}
              <div className="Assistant_background_question_padding_fl_sk">
                <div>
                </div>
                
                <div className="Assistant_background_question_paddingik">
                  <div className="Assistant_background_question_padding_lpk">
                    <div className="Assistant_background_question_padding_op">
                        <span className="span_Ass">
                          <img src={Emmy} alt="Emmy" />
                          <div className="Assistant_background_question_padding_past2">
                          <span className="status_Emmy"></span>
                          <p>
                            Emmy
                          </p>
                          </div>
                        </span>
                    </div>

                   {/* <div className="Assistant_background_question_paddingtetx">
                      Xin ch??o t??? l?? tr??? l?? ???o Emmy b???n c?? th??? h???i t??? b???t c??? ??i???u g?? t??? s??? h??? tr??? v?? gi???i ????p t???t c??? cho m???i ng?????i. N???u tr??? l???i ngo??i m???c h??? tr??? t??? s??? kh??ng gi???i ????p cho c??c b???n ????u nha.
                    </div>*/}
                    <BsThreeDots className="Assistant_background_question_padding_iicon"/>
                  </div>
                             {/*        <p className="Avatars_2_Assintant_sp">Xin ch??o @H???ng ????? Th???t ch??o m???ng b???n quay l???i v???i b??? ph???n h??? tr???.</p>*/}
                  <span className="Assistant_span_span2_time">{Time_show}</span>
                </div>

                <div className="Assistant_background_question_padding2">
                 <span className="Assistant_span_span2">
                   <p className="Avatars_2_Assintant">???? h??? tr??? h??n 16k ng?????i</p>
                   <img src={Avatars} alt="Avatar" />
                   <img src={Avatars} alt="Avatar" />
                   <img src={Avatars} alt="Avatar" />
                   <img src={Avatars} alt="Avatar" />
                   <p>15k+</p>
                 </span>
                 <span className="Assistant_span_btn">
                   <button><MdOutlineDataExploration/>????ng g??p</button>
                   <button><HiOutlineDatabase/>Th??m d??? li???u</button>
                   <button><VscBracketError/>B??o l???i</button>
                 </span>
                </div>
              </div>

            <div className="Assistant_background_chat-container">
              <span id="ap_Emmy"></span>
            </div>
            <span id="speak_Emmy"></span>

            <div className="Assistant_background_question_EMmy">
              <form id="form_Emmy" className="Assistant_background_chat-compose">

                <span><TiMicrophoneOutline className="Assistant_background_icon"/ ></span>

                <input id="val_Emmy" className="input-msg" name="input" placeholder="Nh???p c??u h???i..." autocomplete="off" autofocus />

                <span className="send" id='button_assistant'>
                    <BiSend id="msend_Emmy" className="Assistant_background_icon"/>
                    <audio id="clicksound" src={assistant_music} preload="auto"></audio>
                </span>
              </form>
            </div>


        </div>
      </span>

      </div>
    </div>
  </React.Fragment>, document.body
  ) : null
  );
};

export default Modal;