import { useState } from 'react';
import './GameDrawer.css';
import MenuButton from '../../meta-drawer/menu-button/MenuButton';
import CharactersTab from '../../../characters-tab/characters-tab/CharactersTab';
import WorldsTab from '../../../worlds-tab/worlds-tab/WorldsTab';
import AssetsTab from '../../../assets-tab/assets-tab/AssetsTab';

export default function GameDrawer() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState('characters');

    const tabs = [
        {
            name: 'characters'
        },
        {
            name: 'worlds'
        },
        {
            name: 'assets'
        }
    ];

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
        <div className={`GameDrawer ${(isOpen) ? 'open' : 'close'}`} >
            {(selectedTab === 'characters') && 
                <CharactersTab />
            }
            {(selectedTab === 'worlds') && 
                <WorldsTab />
            }
            {(selectedTab === 'assets') &&
                <AssetsTab />
            }
            <div className='tab-buttons-container'>
                {tabs.map(tab => <MenuButton key={tab.name} name={tab.name} setTab={setTab}/>)}
            </div>
        </div>
    );
}