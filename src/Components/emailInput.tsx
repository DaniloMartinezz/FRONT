import React from 'react';

interface EmailInputProps {
  email: string;
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ email, handleEmailChange }) => {
  return (
    <div className="p-3">
      <div className="uk-inline">
      <span className="uk-form-icon" style={{ color: '#f97316' }} uk-icon="icon: user"></span>
        <input 
          className="uk-input border-grayText-500 rounded w-64 focus:border-orangeGrid-500" 
          placeholder="E-mail"
          type="email" 
          id="email" 
          value={email} 
          onChange={handleEmailChange} 
          required 
          aria-label="Not clickable icon" 
        />
      </div>
    </div>
  );
}

export default EmailInput;