import React from 'react';
import {IconButton, Typography} from '@material-tailwind/react';

import {SectionWrapper} from '../hoc';
import {footerLinks} from '../constants';

export const FooterBar = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full">
            <div className="mx-auto w-full max-w-7x-l px-8 md:grid-cols-2">
                <div className="grid grid-cols-1 justify between gap-4 md:grids-cols-2">
                    <Typography variant="h5" className="mb-6">
                        Jesus Perez Arias Portfolio
                    </Typography>
                    <div className="grid grid-cols-2 justify-between gap-2">
                        {footerLinks.map(( {title, items}, index) => (
                            <ul key={`${title}-${index}`}>
                                {/* Column Header for Footer Below*/}
                                <Typography
                                    variant="small"
                                    className="mb-3 font-medium opacity-70 text-slate-300"
                                >
                                    {title}
                                </Typography>

                                {/* Inner Links Will Be Rendered Below*/}
                                {items.map((link, index) => (
                                    <li key={`${title}-${index}`}>
                                        <Typography
                                            className="text-slate-100"
                                        >
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                className="text-slate-400"
                                            >
                                                {link.name}
                                            </a>
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>

                {/* Render Icons, thanks to material-tailwind.com for boilerplate code below*/}
                <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    {/* Top Header, after the line bar*/}
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                    >
                        &copy; {currentYear} <a href="">Jesus Perez</a>. All Rights Reserved. < br/>
                        <span className="text-[12px] text-slate-400">Created with lots of &#9749; and &#9829;</span>
                    </Typography>

                    {/* START OF ICONS BELOW */}
                    <div className="flex gap-4 sm:justify-center">
                        {footerLinks.map(({items}) => (
                            items.map((item, index) => (
                                <IconButton key={`${item.name}-${index}`} className="h-5 w-5">
                                    <a
                                        href={item.url}
                                        target="_blank"
                                    >
                                        <i className={item.font_icon} style={{color: item.color}}/>
                                    </a>
                                </IconButton>
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )

}
export default SectionWrapper(FooterBar, "")