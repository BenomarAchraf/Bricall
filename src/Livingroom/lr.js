import React , { useState }  from 'react'
import Logo22 from "../Assets/Images/Logo4.svg"
import "./lr.css"
import introlr from "../Assets/Images/Rectangle-lr1.png"
import lr from "../Assets/Images/lr3.png"
import lr1 from "../Assets/Images/lr4.png"
import lr2 from "../Assets/Images/lr5.png"
import lr3 from "../Assets/Images/lr6.png"
import lr4 from "../Assets/Images/lr7.png"
import lr5 from "../Assets/Images/lr8.png"
import Slider from './Slider/Slider'
import Articles from './Articles'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaArrowAltCircleDown as Down } from 'react-icons/fa'
import { BsFillArrowUpSquareFill as Up} from 'react-icons/bs'
import Introcatalogue from '../Homepage/Component0/introcatalogue'
import Checkbox from './Checkbox'
const Lr = () => {
    const type="Living Room";
    const [val , setVal]=useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [checkedOne, setCheckedOne] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);
    const [rate , setrate]=useState("");
    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
    };

    const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
    };

    return (
    <div className='LR'>
        <a className='Up' href="#">
        <Up className='Up1' /> 
        </a>
        <div className='LivingBG'>
            <div  className='Introlr'>
                <img src={introlr} alt="" />
                <p>Categories</p>
            </div>
            <div>
                <Introcatalogue val = { val } setVal = { setVal } type={type} /> 
            </div>
            <div className='Animation'>
                <Down className='down' />
                <div className='Livingroom'>
                   <img src={lr} className='livr' />
                   <img src={lr1} className='livr1' />
                   <img src={lr2} className='livr2' />
                   <img src={lr3} className='livr3' />
                   <img src={lr4} className='livr4' />
                   <img src={lr5} className='livr5' />
                </div>
            </div> 
            <div className='article'>
                <div className='suggestion'>
                    <img className='Logo22' src={Logo22} alt='' />
                    <p>Suggestion For You</p>
                    <div className='Amine'></div>
                </div>
                <div className='articles'>
                   <Slider /> 
                </div>
                <div className='Amine'></div>
                <div className='Chercher'>
                    
                    <img className='Logo221' src={Logo22} alt=''/>
                    <div className='Rate'>
                        <div className='grid-Rate'>
                            <p className='title1'>Date</p>                           
                            <DatePicker className='Date' selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className='grid-Rate'>
                            <p className='title1'>Rating</p>                           
                            <div className='Chec'>
                                <Checkbox
                                    label="Most Viewed"
                                     value={checkedOne}
                                     onChange={handleChangeOne}
                                />
                                <Checkbox
                                    label="Most Rated"
                                    value={checkedTwo}
                                    onChange={handleChangeTwo}
                                />
                            </div>
                        </div>
                        <div className='grid-Rate1'>
                            <button className='Filtrer' onClick=""> 
                              Filter
                            </button>
                        </div>
                    </div>
                </div>
                <div className='articles1'>
                    <Articles />
                    <div className="pagination">
                        <a href="#">&laquo;</a>
                        <a class="active" href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">&raquo;</a>
                    </div>

                </div> 
            </div>




        </div>
    </div>
  )
}

export default Lr