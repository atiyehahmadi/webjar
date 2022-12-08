import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';
import { cls } from '../src/utils/helpers'

const classes = {
    base: 'focus:outline-none transition ease-in-out duration-300 text-[18px] md:text-sm text-xs',
    disabled: 'opacity-50 cursor-not-allowed',
    pill: 'rounded-full',


    variant: {
        primary: 'lg:px-14 md:px-8 px-4 xl:py-3 py-2 align-middle text-greenwb  font-normal  border border-greenwb rounded-2xl hover:shadow-md lg:text-xl md:text-base text-sm',
        secondary: 'px-14 py-3 align-middle text-white bg-greenwb  font-normal  border border-greenwb rounded-2xl hover:shadow-md lg:text-xl md:text-base text-sm',

    }
}

const Button = forwardRef(
    (
        {
            children,
            type = 'button',
            className,
            variant = 'primary',
            disabled = false,
            ...props
        }, ref
    ) => (
        <button
            ref={ref}
            disabled={disabled}
            type={type}
            className={cls(`
                ${classes.base}
                ${classes.variant[variant]}
                ${disabled && classes.disabled}
                ${className}
            `)}
            {...props}
        >
            {children}
        </button>
    ));

Button.propTypes = {
    children: PropTypes.node.isRequired,
    submit: PropTypes.oneOf(['submit', 'button']),
    className: PropTypes.string,

    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),

}

export default Button