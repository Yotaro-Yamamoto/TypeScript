/*名前空間はネストすることもあるが、exportもネストしなくてはならないので、
　ネストが深くなるようであれば無理に統合せずにモジュールを分けたほうがよい。*/
export namespace Galaxy {
    export namespace Solar {
        export namespace Earth {
            export const RADIUS = 6378.1;
        }
    }
}