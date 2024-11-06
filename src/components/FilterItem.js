import React from 'react';

export default function FilterItem({ label }) {
    return (
        <li>
            <input type="checkbox" />
            {label}
        </li>
    );
}
