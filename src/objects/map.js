// Y - character
// E - enemy
// H - ladder
// W - win ladder
// # - brick
// % - solid_brick
// $ - gold
// ? - trap
// - - rope
//   - blank

const MAPS = {
  'level-001': [
    '                                ',
    '  E $                           ',
    '#%%#%%#%%%#H######%             ',
    '           H-----------         ',
    '           H    ##H             ',
    '           H  E ##H      $      ',
    '           H    ##H   #####H####',
    '           H    ##H        H    ',
    '           H    ##H        H    ',
    '           H    ##H       $H    ',
    '###H########    ########H##########',
    '   H                    H       ',
    '   H                    H       ',
    '   H                    H       ',
    '##############H#########H       ',
    '              H         H       ',
    '              H         H       ',
    '          E $ H---------H  $ E  ',
    '      H#########        #######H',
    '      H                        H',
    '      H          Y  $          H',
    '################################',
  ],
};

export default MAPS;
