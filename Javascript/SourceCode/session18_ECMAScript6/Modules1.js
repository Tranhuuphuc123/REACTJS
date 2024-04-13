
// trong modules1.js ta cần export thì bên module.js mới import đc
function logger(log, type = 'log') {
    console[type](log)
}

// sử dụng kiểu export với default
export default logger


// export kiểu name export khôg có  dùng default
export const Type_log = 'log'
export const Type_warn = 'warn'
export const Type_error = 'error'


