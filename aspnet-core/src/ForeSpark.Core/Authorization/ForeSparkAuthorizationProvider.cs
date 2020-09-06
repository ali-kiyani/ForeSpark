using Abp.Authorization;
using Abp.Localization;
using Abp.MultiTenancy;

namespace ForeSpark.Authorization
{
    public class ForeSparkAuthorizationProvider : AuthorizationProvider
    {
        public override void SetPermissions(IPermissionDefinitionContext context)
        {
            context.CreatePermission(PermissionNames.Pages_Users, L("Users"));
            context.CreatePermission(PermissionNames.Pages_Roles, L("Roles"));
            context.CreatePermission(PermissionNames.Pages_Tenants, L("Tenants"), multiTenancySides: MultiTenancySides.Host);
            context.CreatePermission(PermissionNames.Pages_Products, L("Products"));
            context.CreatePermission(PermissionNames.Pages_Warehouse, L("Warehouse"));
            context.CreatePermission(PermissionNames.Pages_Orders, L("Orders"));
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, ForeSparkConsts.LocalizationSourceName);
        }
    }
}
