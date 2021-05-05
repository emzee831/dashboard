import React from 'react'
import { sideBarData } from './leftbuttons'

function sidebar() {
    return (
        <div>
            <ul className="sidebarlist">
            {sideBarData.map((val, key) => {
                return (
                    <li
                    key={key}
                    className="row"
                    id={window.location.pathname == val.link ? "active" : ""}
                    onclick={() => {window.location.pathname = val.link;
                    }}
                   >
                       <div id="icon">{val.icon}</div>{""}
                       <div id="title">{val.title}</div>
                    </li>
                );
            })}
            </ul>
        </div>
    )
}

export default sidebar
