const { log, clear, to_bin_str } = require("./utils")

clear()
log(to_bin_str(11))

/*
    1011(2) = 11(10)

    11 % 2 = 1
    5 % 2 = 1
    2 % 2 = 0
    1 % 2 = 1
    0
*/