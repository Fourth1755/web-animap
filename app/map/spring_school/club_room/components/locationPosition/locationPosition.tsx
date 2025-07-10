import './locationPosition.scss'
import { LocationPositionPoint } from '@/app/map/component/locationPositionPoint/locationPositionPoint'

export default function LocationPosition(){
    return (
        <div className="locaation-position-container">
            <div className='locaation-position-building-rooftop'>
                <LocationPositionPoint 
                    locationName='ประกาศ'
                    message='จากชมรมดาราศาสตร์ อย่าลืมดูท้องฟ้าในวันศุกร์ที่ 13 กันด้วยนะ' />
            </div>
            <div className='locaation-position-club-room'>
                <LocationPositionPoint 
                    locationName='หน้าต่าง'
                    message='สายลมช่างเงียบสงบ' />
            </div>
            <div className='locaation-position-library'>
                <LocationPositionPoint 
                    locationName='กระดานดำ'
                    message='10 สิ่งที่ต้องทำให้สำเร็จก่อนวันวัฒนธรรมจะมาถึง' />
            </div>
            <div className='locaation-position-student-council'>
                <LocationPositionPoint 
                    locationName='เครื่องถ่ายเอกสารชำรุด' 
                    message='ควรจะเอาไปซ่อมได้นานแล้วนะ'/>
            </div>
            <div className='locaation-position-calenda'>
                <LocationPositionPoint 
                    locationName='ปฏิทิน'
                    message='อีก 9 วันต่อจากนี้จะถึงงานวัฒนธรรมแล้ว' />
            </div>
        </div>
    )
}