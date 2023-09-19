"use client"
import './animate.css';
import { useState, useEffect } from 'react';

export default function AnimatedPage() {
    const [classNames, setClassNames] = useState('');
    const [show, setShow] = useState(false);
    const [showSvg, setShowSvg] = useState(false);

    const animate = () => {
        setShow(true);
        setClassNames('move-down');
        setTimeout(()=>setShowSvg(true), 400);
        setTimeout(()=>setClassNames('move-up'), 6000);
        setTimeout(()=>{setClassNames(''); setShow(false)}, 7000);
    }
    useEffect(() => {
        animate();
    }, [])

    return (
        show && <div className={`page + ${classNames}`} >
            {showSvg && <svg viewBox="43.397 169.495 489.408 131.01" style={{ height: "534px"}} xmlns="http://www.w3.org/2000/svg" width="489.4079895019531" height="100%">
                <g fill="#ffc72c" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
                    <g data-paper-data="{&quot;isGlobalGroup&quot;:true,&quot;bounds&quot;:{&quot;x&quot;:65,&quot;y&quot;:189.11674773951333,&quot;width&quot;:419.99999999999994,&quot;height&quot;:91.76650452097331}}">
                        <g data-paper-data="{&quot;isPrimaryText&quot;:true}" id="element-id-10472">
                            <path d="M200.84126,202.64239c-0.27037,0.09012 -1.5321,60.56285 -0.18025,63.89741c0.81111,2.07284 33.70611,1.62222 35.14808,0c0.54074,-0.81111 1.08148,-13.158 1.1716,-26.76662c-22.26045,0 -19.55675,12.97775 -11.89627,12.97775c2.97407,0 2.97407,6.03826 0,6.03826c-5.31727,0 -10.18393,-4.59629 -10.09381,-11.6259l-0.27037,-35.95919c0,-2.79382 2.7037,-4.14567 4.05555,-1.89259c0,0.09012 6.579,11.44566 18.11478,12.88763c-0.09012,-10.54443 -0.54074,-19.10614 -1.35185,-20.09749c-0.09012,-0.18025 -34.69747,0.45062 -34.69747,0.54074z" data-paper-data="{&quot;glyphName&quot;:&quot;G&quot;,&quot;glyphIndex&quot;:0,&quot;firstGlyphOfWord&quot;:true,&quot;word&quot;:1}" fill="#ffffff" id="element-id-66119" className="svg-elem-1"></path>
                            <path d="M242.20785,202.64239c-0.27037,0.09012 -1.5321,60.56285 -0.18025,63.89741c0.81111,2.07284 33.70611,1.62222 35.05796,0c1.44197,-1.80247 1.98271,-61.82458 -0.18025,-64.43815c-0.09012,-0.18025 -34.69747,0.45062 -34.69747,0.54074zM257.79918,215.53002c0,-1.71234 1.08148,-3.06419 2.34321,-2.97407c1.26173,0 2.25308,1.44197 2.16296,3.06419l-0.45062,26.22588l-0.18025,11.80615c0,1.62222 -0.99136,2.97407 -2.34321,2.88395c-1.1716,0 -2.16296,-1.35185 -2.16296,-3.06419l0.18025,-11.80615z" data-paper-data="{&quot;glyphName&quot;:&quot;O&quot;,&quot;glyphIndex&quot;:1,&quot;word&quot;:1}" fill="#ffffff" id="element-id-23511" className="svg-elem-2"></path>
                            <path d="M283.66457,202.64239c-0.27037,0.09012 -1.5321,60.56285 -0.18025,63.89741c0.81111,2.07284 33.70611,1.62222 35.05796,0c0.54074,-0.72099 0.90123,-8.65184 1.1716,-18.74564c-11.08516,1.62222 -15.95182,12.88763 -16.04195,12.97775c-0.54074,1.44197 -1.98271,1.89259 -3.06419,1.08148c-0.90123,-0.63086 -1.1716,-1.89259 -1.08148,-3.06419v0c0,-0.09012 3.78518,-32.44438 1.35185,-56.5073c-8.65184,0.09012 -17.21355,0.27037 -17.21355,0.36049z" data-paper-data="{&quot;glyphName&quot;:&quot;L&quot;,&quot;glyphIndex&quot;:2,&quot;word&quot;:1}" fill="#ffffff" id="element-id-90829" className="svg-elem-3"></path>
                            <path d="M340.44224,210.0325c0.09012,-3.96542 4.59629,-3.8753 4.50616,0.09012l-0.72099,48.03571c0,3.8753 -4.50616,3.8753 -4.41604,-0.18025zM324.76079,202.64239c-0.18025,0.09012 -1.44197,60.56285 -0.09012,63.89741c0.54074,1.44197 16.13207,1.62222 26.316,1.08148c1.98271,-0.27037 4.23579,0.36049 7.02962,-2.61358c1.08148,-1.1716 1.98271,-2.7037 2.43333,-4.68641c0.72099,-11.89627 0.81111,-37.85178 0.18025,-50.73941c-0.54074,-3.69505 -3.96542,-7.20986 -6.39875,-7.48023c-9.73332,0.09012 -29.38019,0.45062 -29.47032,0.54074z" data-paper-data="{&quot;glyphName&quot;:&quot;D&quot;,&quot;glyphIndex&quot;:3,&quot;word&quot;:1}" fill="#ffffff" id="element-id-37268" className="svg-elem-4"></path>
                            <path d="M366.30762,202.64239c-0.27037,0.09012 -1.5321,60.56285 -0.18025,63.89741c0.81111,2.07284 33.70611,1.62222 35.05796,0c0.27037,-0.36049 0.54074,-2.79382 0.72099,-6.579c-1.44197,-2.79382 -6.93949,-11.9864 -17.57404,-12.34689c-2.97407,-0.18025 -2.88395,-6.12838 0.18025,-6.03826c8.38147,0.27037 14.3296,5.31727 17.66417,9.64319c0.27037,-9.73332 0.36049,-22.53082 0.18025,-32.62463c-3.51481,4.41604 -9.2827,9.55307 -17.84441,9.82344c-3.06419,0.09012 -3.15432,-5.94814 -0.18025,-6.03826c10.99504,-0.36049 16.40244,-10.00369 17.66417,-12.52714c-0.18025,-4.32592 -0.54074,-7.20986 -0.99136,-7.7506c-0.09012,-0.18025 -34.69747,0.45062 -34.69747,0.54074z" data-paper-data="{&quot;glyphName&quot;:&quot;E&quot;,&quot;glyphIndex&quot;:4,&quot;word&quot;:1}" fill="#ffffff" id="element-id-83251" className="svg-elem-5"></path>
                            <path d="M407.40385,202.64239c-0.18025,0.09012 -1.44197,60.56285 -0.09012,63.89741c0.54074,1.44197 16.31232,1.62222 26.49625,1.08148c-6.75925,-10.54443 -11.08516,-22.98144 -11.08516,-23.07156c-0.54074,-1.5321 0,-3.33456 1.08148,-3.96542c1.08148,-0.72099 2.43333,-0.09012 2.97407,1.44197c1.62222,4.50616 11.44566,29.29007 15.68145,24.51354c1.35185,-1.71234 1.89259,-61.82458 -0.27037,-64.43815c0,-0.09012 -15.23084,0.09012 -25.41477,0.27037c6.75925,10.54443 11.08516,22.98144 11.08516,23.07156c0.54074,1.5321 0,3.33456 -1.1716,3.96542c-1.08148,0.72099 -2.43333,0.09012 -2.97407,-1.35185c-1.80247,-5.13703 -11.71603,-29.10982 -16.31232,-25.41477z" data-paper-data="{&quot;glyphName&quot;:&quot;N&quot;,&quot;glyphIndex&quot;:5,&quot;word&quot;:1}" fill="#ffffff" id="element-id-3585" className="svg-elem-6"></path>
                            <path d="M448.86056,202.64239c-0.27037,0.09012 -1.5321,60.56285 -0.18025,63.89741c0.81111,2.07284 33.70611,1.62222 35.14808,0c0.54074,-0.81111 1.08148,-13.158 1.1716,-26.76662c-22.26045,0 -19.55675,12.97775 -11.89627,12.97775c2.97407,0 2.97407,6.03826 0,6.03826c-5.31727,0 -10.18393,-4.59629 -10.09381,-11.6259l-0.27037,-35.95919c0,-2.79382 2.7037,-4.14567 4.05555,-1.89259c0,0.09012 6.579,11.44566 18.11478,12.88763c-0.09012,-10.54443 -0.54074,-19.10614 -1.35185,-20.09749c-0.09012,-0.18025 -34.69747,0.45062 -34.69747,0.54074z" data-paper-data="{&quot;glyphName&quot;:&quot;G&quot;,&quot;glyphIndex&quot;:6,&quot;lastGlyphOfWord&quot;:true,&quot;word&quot;:1}" fill="#ffffff" id="element-id-38149" className="svg-elem-7"></path>
                        </g>
                        <g data-paper-data="{&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;fillRuleOriginal&quot;:&quot;nonzero&quot;,&quot;isIcon&quot;:true,&quot;iconStyle&quot;:&quot;standalone&quot;,&quot;selectedEffects&quot;:{&quot;container&quot;:&quot;&quot;,&quot;transformation&quot;:&quot;&quot;,&quot;pattern&quot;:&quot;&quot;},&quot;bounds&quot;:{&quot;x&quot;:65,&quot;y&quot;:189.11674773951333,&quot;width&quot;:78.508452265029,&quot;height&quot;:91.76650452097331},&quot;iconType&quot;:&quot;icon&quot;,&quot;rawIconId&quot;:&quot;20b322c7-9a41-4b40-a077-f33f8da5b829&quot;,&quot;isDetailed&quot;:false,&quot;suitableAsStandaloneIcon&quot;:true}" id="element-id-28916">
                            <path d="M110.88325,280.88324v-91.7665c-6.41239,0 -12.39151,1.21315 -17.93736,3.63946c-5.4592,2.42631 -10.31182,5.71916 -14.55786,9.87855c-4.07273,4.07273 -7.32226,8.92535 -9.74857,14.55786c-2.42631,5.54585 -3.63946,11.48165 -3.63946,17.80738c0,6.41239 1.16983,12.39151 3.50949,17.93736c2.42631,5.4592 5.71916,10.31182 9.87855,14.55786c4.24604,4.07273 9.09866,7.32226 14.55786,9.74857c5.54585,2.42631 11.52497,3.63946 17.93736,3.63946zM116.99235,235.25995h26.5161v45.62329h-26.5161zM116.99235,189.11675h26.5161v27.29598h-26.5161z" data-paper-data="{&quot;isPathIcon&quot;:true}" id="element-id-38056" className="svg-elem-8"></path>
                        </g>
                        <path d="M166.12379,280.88325v-91.7665h2.59048v91.7665z" data-paper-data="{&quot;isShapeTextSeparator&quot;:true}" id="element-id-13723" className="svg-elem-9"></path>
                    </g>
                </g>
                <rect data-element-id="element-id-10472" strokeWidth="2" fill="transparent" className="invisible-element-box grouping-element svg-elem-10" x="200" y="202" width="285" height="66" data-element-name="isPrimaryText"></rect>
                <rect data-element-id="element-id-28916" strokeWidth="2" fill="transparent" className="invisible-element-box grouping-element svg-elem-11" x="65" y="189" width="79" height="92" data-element-name="isIcon"></rect>
                <rect data-element-id="element-id-38056" strokeWidth="2" fill="transparent" className="invisible-element-box individual-element svg-elem-12" x="65" y="189" width="79" height="92"></rect>
                <rect data-element-id="element-id-66119" strokeWidth="2" fill="transparent" className="invisible-element-box individual-element svg-elem-13" x="200" y="202" width="37" height="66"></rect>
                <rect data-element-id="element-id-23511" strokeWidth="2" fill="transparent" className="invisible-element-box individual-element svg-elem-14" x="241" y="202" width="37" height="66"></rect>
                <rect data-element-id="element-id-90829" strokeWidth="2" fill="transparent" className="invisible-element-box individual-element svg-elem-15" x="283" y="202" width="37" height="66"></rect>
                <rect data-element-id="element-id-37268" strokeWidth="2" fill="transparent" className="invisible-element-box individual-element svg-elem-16" x="324" y="202" width="37" height="66"></rect>
                <rect data-element-id="element-id-83251" strokeWidth="2" fill="transparent" className="invisible-element-box individual-element svg-elem-17" x="366" y="202" width="37" height="66"></rect>
                <rect data-element-id="element-id-3585" strokeWidth="2" fill="transparent" className="invisible-element-box individual-element svg-elem-18" x="407" y="202" width="37" height="66"></rect>
                <rect data-element-id="element-id-38149" strokeWidth="2" fill="transparent" className="invisible-element-box individual-element svg-elem-19" x="448" y="202" width="37" height="66"></rect>
                <rect data-element-id="element-id-13723" strokeWidth="2" fill="transparent" className="invisible-element-box individual-element svg-elem-20" x="166" y="189" width="3" height="92"></rect>
            </svg>}
        </div>
    )
}