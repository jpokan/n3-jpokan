precision mediump float;
uniform sampler2D u_tex;
uniform vec2 u_horizontal;
uniform vec2 u_vertical;

// get the varying v_uv from vertex shader
varying vec2 v_uv;

void main() {
  // asymetrical borders
  if(v_uv.y <= u_vertical.x || v_uv.y >= u_vertical.y) discard;
  if(v_uv.x <= u_horizontal.x || v_uv.x >= u_horizontal.y) discard;

  vec3 texel = texture2D(u_tex, v_uv).rgb;

  gl_FragColor = vec4(texel, 1.0);
}
