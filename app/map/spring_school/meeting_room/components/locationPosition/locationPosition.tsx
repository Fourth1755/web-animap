import './locationPosition.scss'
import { LocationPositionPoint } from '@/app/map/component/locationPositionPoint/locationPositionPoint'

export default function LocationPosition(){
    return (
        <div className="locaation-position-container">
            <div className='locaation-position-one'>
                <LocationPositionPoint 
                    locationName='นาฬิกา'
                    message='เมื่อไหร่จะถึงเวลาอาหารกลางวันสักทีนะ' />
            </div>
            <div className='locaation-position-two'>
                <LocationPositionPoint 
                    locationName='หน้าต่าง'
                    message='แสดงแดดยามเช้า ช่างอบอุ่นเหลือเกิน' />
            </div>
            <div className='locaation-position-three'>
                <LocationPositionPoint 
                    locationName='แป้นบาส' 
                    message='ถ้ากระโดดโหนถึงจะเท่ขนาดไหนนะ'/>
            </div>
            <div className='locaation-position-four'>
                <LocationPositionPoint 
                    locationName='โพเดียม'
                    message='ที่ประจำกับประธานนักเรียนและผู้อำนวยการโรงเรียน' />
            </div>
        </div>
    )
}