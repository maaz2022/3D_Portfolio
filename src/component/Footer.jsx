import React from 'react';
import { socialLinks } from '../constants';

const Footer = () => {
  return (
    <section className='footer-container mt-9'>
      <div className='footer'>
        <div className='mt-16 flex flex-wrap gap-12 justify-center'>
          {socialLinks.map((skills) => (
            <div key={skills.name} className='block-container w-20 h-20'>
              <a href={skills.link} target="_blank" rel="noopener noreferrer">
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img 
                    src={skills.iconUrl}
                    alt={skills.name}
                    className='w-1/2 h-1/2'
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
