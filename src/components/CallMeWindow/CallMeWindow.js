import React, {useEffect, useState} from "react";

export default function CallMeWindow() {

    const [tel, setTel] = useState('')
    const [telDirty, setTelDirty] = useState(false)
    const [telError, setTelError] = useState('Поле не можe бути пустим')
    const [formValid, setFormValid] = useState(false)
    const [submit, setSubmit] = useState(false)

    useEffect(() => {
        if (telError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [telError,])

    useEffect(() => {
        if (tel && submit) {
            fetch(`https://api.telegram.org/bot1606712611:AAGUZT30m9uPSt_Foknd0Zi6ZOc9-0G35fM/sendMessage?chat_id=522928013&text=замовлення +38${tel}`)
        }
    }, [tel, submit])

    const Submit = (e) => {
        setSubmit(true)
    }

    const telHandler = (e) => {
        setTel(e.target.value)
        const re = /^[0-9]{10,10}$/;
        if (!re.test(e.target.value)) {
            setTelError('не вірний номер')
        } else {
            setTelError('')
        }
    }

    const blurHandler = (e) => {
        setTelDirty(true)
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalLabel"
             aria-hidden="true">

            <div className="modal-dialog text-info" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="" id="exampleModalLabel">Введіть номер телефону для зворотнього звязку</h5>
                    </div>

                    <form action="">

                        <div className="modal-body">

                            <div>
                                +38<input onChange={e => telHandler(e)}
                                          value={tel}
                                          onBlur={e => blurHandler()}
                                          type="tel" name="tel"
                                          placeholder="Введіть номер"/>
                                {(telDirty && telError && <div style={{color: 'red'}}> {telError}</div>)}
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger"
                                    data-dismiss="modal">Close
                            </button>
                            <button disabled={!formValid} onClick={Submit} type="submit" className="btn btn-primary">Save changes
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}