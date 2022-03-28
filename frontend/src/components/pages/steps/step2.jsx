import React from 'react'
import Timelock from '../../utils/timelock/Timelock'
import DrawerLayout from '../../layout/Drawer/DrawerLayout'
import { useHistory, Link } from 'react-router-dom';



const step2 = () => {
  return (
    <div>
        <DrawerLayout>
        <Timelock/>
        <div className="btn-div">
                  <button className="custom-btn btn-atras">Atras</button>
                    <Link to="/step3" className="links-footer">
                  <button className="custom-btn btn-siguiente">
                      Siguiente
                    
                  </button>
                  </Link>
                </div>
        </DrawerLayout>
    </div>
  )
}

export default step2