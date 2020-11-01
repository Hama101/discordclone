import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Hamdi Mohamed</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar__channels">
                <div className="sidebar_channelsHeader">
                    <div className="sidebar__header">
                        < ExpandMoreIcon/>
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel"/>
                </div>

                <div className="sidebar__channelsList">
                    <SidebarChannel channel="test1"/>
                    <SidebarChannel channel="test2" />
                    <SidebarChannel channel="test3"/>
                </div>
            </div>

            


        </div>
    )
}

export default Sidebar
