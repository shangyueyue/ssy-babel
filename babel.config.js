module.exports ={
  presets:[
    [
      '@babel/preset-env',
      {
        targets: {
          ie: "8",
        },
        useBuiltIns: 'usage',
        "corejs": 2,
      }
    ]
  ],
  plugins:[
    ['@babel/plugin-transform-runtime',{
      corejs: 2,
    }]
    
  ],

}