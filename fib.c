#include <emscripten.h>
#include <math.h>

EMSCRIPTEN_KEEPALIVE
int fib(int n){
    int result = (pow(1+sqrt(5),n)-pow(1-sqrt(5),n))/(pow(2,n)*sqrt(5));
    return(result);
}