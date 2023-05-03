#version 300 es

precision mediump float;

in vec2 texcoord;
uniform float time;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    FragColor = texture(image, texcoord);

    
    float L = (time/10.0) * FragColor[0] + (time/10.0)  * FragColor[1] + (time/10.0) * FragColor[2];
    FragColor[0] = L*15.0;
    FragColor[1] = L*2.0;
    FragColor[2] = L/5.0;


}
