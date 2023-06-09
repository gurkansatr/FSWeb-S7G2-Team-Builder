import { useState } from "react"
const Form = (props) => {
    const {uyeler,setUyeler,editId} = props;
    const emptyData = {
        firstName:"",
        lastName:"",
        email:"",
        position:""
    }
   
    const [uye, setUye] = useState (editId ? uyeler.find(item=> item.id==editId):emptyData)
    const handleChange = (e) => {
        const {name,value} = e.target;
        setUye({...uye,[name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            const eskiUye = uyeler.find(item=> item.id==editId);
            eskiUye.firstName = uye.firstName
            eskiUye.lastName = uye.lastName
            eskiUye.email = uye.email
            eskiUye.position = uye.position
            setUyeler([...uyeler])
        }else{
        const yeniUye = {...uye, id:(uyeler.length +1) }
        setUyeler({...uyeler,yeniUye});

        }
        
        setUye(emptyData)
    }

    return (
        <form onSubmit={handleSubmit} >
            <div>
                <label>Name:
                    <input onChange={handleChange} value={uye.firstName} type="text" name="firstName" placeholder="İsim giriniz" />
                </label>
                <label>Surname:
                    <input onChange={handleChange} value={uye.lastName} type="text" name="lastName" placeholder="Soyisim giriniz" />
                </label>
                <label>Email:
                    <input onChange={handleChange} value={uye.email} type="text" name="email" placeholder="Email giriniz" />
                </label>
                <label>Position:
                    <input onChange={handleChange} value={uye.position} type="text" name="position" placeholder="Pozisyonunuz" />
                </label>
                <button type="submit" value= "submit" >
                    Gönder
                </button>
            </div>
        </form>
    )
}

export default Form;