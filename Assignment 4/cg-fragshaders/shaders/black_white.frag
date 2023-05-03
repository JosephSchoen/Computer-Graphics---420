#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;


void main() {
    FragColor = texture(image, texcoord);

    float L = 0.299 * FragColor[0] + 0.587 * FragColor[1] + 0.114 * FragColor[2];
    FragColor[0] = L;
    FragColor[1] = L;
    FragColor[2] = L;

}
