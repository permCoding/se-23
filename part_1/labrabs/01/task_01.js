const { 
    log, 
    clear, 
    to_bin_arr, 
    to_bin_str, 
    to_bin_rec,
    to_dec 
} = require("./utils")

clear()
log(to_bin_arr(11))
log(to_bin_str(11))
log(to_bin_rec(11))

log(to_dec("1101"))

/* 
    1011(2) = 11(10)

    11 % 2 = 1
    5 % 2 = 1
    2 % 2 = 0
    1 % 2 = 1
    0
*/