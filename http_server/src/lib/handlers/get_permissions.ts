import { Handler } from "../types/Handler";
import { get_user_id } from "../core/ctx/get_user_id";
import { get_postgrest } from "../core/http/req_postgrest";

export const get_permissions: Handler = async (ctx, _next) => {
  const user_id: string = await get_user_id(ctx);
  const permissions_result: any[] = await get_postgrest(
    `/user_permission?user_id=eq.${user_id}`
  );
  ctx.body = {
    permissions: permissions_result.map(
      (row) => row.permission_code
    ),
  };
};
