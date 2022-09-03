import { useEffect, useState } from 'react';
import ChannelChat from '../../../channel-chat/ChannelChat';
import DirectMessages from '../../../direct-messages/direct-messages/DirectMessages';
import UsersTab from '../../../users-tab/users-tab/UsersTab';
import MenuButton from '../menu-button/MenuButton';
import './MetaDrawer.css';

export default function MetaDrawer() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState('channel-chat');

    const tabs = [
        {
            name: 'channel-chat'
        },
        {
            name: 'direct-messages'
        },
        {
            name: 'users'
        }
    ]

    const setTab = (e, tabName) => {
        console.log(selectedTab);
        if (tabName === selectedTab) {
            setIsOpen(!isOpen);
        } else {
            setSelectedTab(tabName);
            if (!isOpen) setIsOpen(!isOpen);
        }
    }

    return(
        <div className={`MetaDrawer ${(isOpen) ? 'meta-open' : 'meta-close'}`}>
            <div className='tab-buttons-container'>
                {tabs.map(tab => <MenuButton key={tab.name} name={tab.name} setTab={setTab}/>)}
            </div>
            {(selectedTab === 'channel-chat') &&
                <ChannelChat />
            }
            {(selectedTab === 'direct-messages') &&
                <DirectMessages />
            }
            {(selectedTab === 'users') &&
                <UsersTab />
            }
            
        </div>
    );
}