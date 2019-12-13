import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor} from '@nestjs/common';

@Injectable()
export class LoggingInterceptor implements  NestInterceptor {
  public intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    const now = Date.now();
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;
    const ip = req.ip.replace('::ffff', '');
    const name = context.getClass().name;
    return next.handle().pipe(
      tap(() => {
          new Logger(`HttpRequest:${name}`).log(`来源IP：${ip} 请求方法:${method} 请求路径:${url} 处理成功 耗时: ${Date.now() - now} ms`);
        }, () => {
          new Logger(`HttpRequest:${name}`).log(`来源IP：${ip} 请求方法:${method} 请求路径:${url} 处理失败 耗时: ${Date.now() - now} ms`);
        },
      ),
    );
  }
}
