// Y - player
// E - enemy
// H - ladder
// W - win ladder
// # - brick
// % - solid_brick
// $ - gold
// ? - trap
// - - rope
//   - blank

const LEVEL_MAP = {
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
    '###H########    ########H#######',
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
  'level-002': [
    '#                               ',
    '    $                           ',
    '#%%#%%#%%%#H######%             ',
    '           H-----------         ',
    '           H    ##H             ',
    '           H    ##H      $      ',
    '           H    ##H   #####H####',
    '           H    ##H        H    ',
    '           H    ##H        H    ',
    '           H    ##H       $H    ',
    '###H########    ########H#######',
    '   H                    H       ',
    '   H                    H       ',
    '   H                    H       ',
    '##############H#########H       ',
    '              H         H       ',
    '              H         H       ',
    '            $ H---------H  $    ',
    '      H#########        #######H',
    '      H                        H',
    '      H             $          H',
    '################################',
  ],
  'level-003': [
    '                                ',
    '                                ',
    '                                ',
    '                                ',
    '                                ',
    '                                ',
    '                                ',
    '                                ',
    '                                ',
    '                                ',
    '                                ',
    '                                ',
    '                                ',
    '                                ',
    '                                ',
    'H                               ',
    'H                               ',
    'H                               ',
    'H                               ',
    'H                               ',
    'H                               ',
    '################################',
  ],
};

export default LEVEL_MAP;
