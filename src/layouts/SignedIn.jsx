import React from 'react'
import { DropdownItem, DropdownMenu, MenuItem,Dropdown, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <MenuItem>
                <Image avatar spaced="right" src='/logo192.png' />
                <Dropdown pointing="top left" text='Atacan'>
                    <DropdownMenu>
                        <DropdownItem text="Bilgilerim" icon="info" />
                        <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                    </DropdownMenu>
                </Dropdown>
            </MenuItem>
        </div>
    )
}