import { HandySvg } from "handy-svg";
import closeSvgSrc from './../svg/close.svg'



export default function ModalInfo({ active, setActive, user }) {

    return (
        <div className={active ? "client-info active" : "client-info"} onClick={() => setActive(false)}>
            <div className="client-info__content" onClick={event => event.stopPropagation()}>
                <div className="client-info__content_name">{user.name}
                <HandySvg
                    src={closeSvgSrc}
                    width="20px"
                    height="20px"    
                    className="closeSvg"
                    onClick={() =>setActive(false)}            
                /></div>
                <div className="client-info__content-wrapper">
                    <div className="client-info__content-names">
                        <div className="client-info__content-names_phone">Телефон:</div>
                        <div className="client-info__content-names_email">Почта:</div>
                        <div className="client-info__content-names_hire_date">Дата приема:</div>
                        <div className="client-info__content-names_position_name">Должность:</div>
                        <div className="client-info__content-names_department">Подразделение:</div>
                    </div>
                    <div className="client-info__content-values">
                        <div className="client-info__content_phone">{user.phone}</div>
                        <div className="client-info__content_email">{user.email}</div>
                        <div className="client-info__content_hire_date">{user.hire_date}</div>
                        <div className="client-info__content_position_name">{user.position_name}</div>
                        <div className="client-info__content_department">{user.department}</div>
                    </div>
                </div>
                <div className="client-info__content_address-title">Дополнительная информация:</div>
                <div className="client-info__content_address">{user.address}</div>
            </div>
        </div>
    )

}