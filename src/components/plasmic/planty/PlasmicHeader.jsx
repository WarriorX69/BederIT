// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ozcq8GxerrF1WYaqjsW34y
// Component: bQMthM1hHKi7g
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import MenuButton from "../../MenuButton"; // plasmic-import: V-Evw1O_93TrWQ/component
import IconLink from "../../IconLink"; // plasmic-import: SxqxDSLnmgD05-/component
import LinkButton from "../../LinkButton"; // plasmic-import: E6EaS9_QHu4_4J/component
import { useScreenVariants as useScreenVariantssOxgEMpX5WMfyx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: sOxgEMpX5wMfyx/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_planty.module.css"; // plasmic-import: ozcq8GxerrF1WYaqjsW34y/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: bQMthM1hHKi7g/css
import LogoWhitesvgIcon from "./icons/PlasmicIcon__LogoWhitesvg"; // plasmic-import: balrGAwrw01e0o/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: DyfG5qeOU2Bw0h/icon

export const PlasmicHeader__VariantProps = new Array("expanded");

export const PlasmicHeader__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHeader__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "expanded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.expanded
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssOxgEMpX5WMfyx()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        { [sty.rootexpanded]: hasVariant($state, "expanded", "expanded") }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__pjzM)}
      >
        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <MenuButton
            data-plasmic-name={"menuButton"}
            data-plasmic-override={overrides.menuButton}
            className={classNames("__wab_instance", sty.menuButton, {
              [sty.menuButtonexpanded]: hasVariant(
                $state,
                "expanded",
                "expanded"
              )
            })}
            expanded={
              hasVariant($state, "expanded", "expanded") &&
              hasVariant(globalVariants, "screen", "mobile")
                ? true
                : undefined
            }
          />
        ) : null}
        {true ? (
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__qLz8G
            )}
            href={`/`}
          >
            <LogoWhitesvgIcon
              a={""}
              className={classNames(projectcss.all, sty.svg__qRnjP)}
              role={"img"}
            />
          </a>
        ) : null}
        {(
          hasVariant($state, "expanded", "expanded") &&
          hasVariant(globalVariants, "screen", "mobile")
            ? true
            : hasVariant(globalVariants, "screen", "mobile")
            ? true
            : true
        ) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__isfB, {
              [sty.freeBoxexpanded__isfBjNh9I]: hasVariant(
                $state,
                "expanded",
                "expanded"
              )
            })}
          >
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__b082E
              )}
              href={`/store`}
            >
              {"Store"}
            </a>
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___5GuH
              )}
              href={`/about`}
            >
              {"About"}
            </a>
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__chVJw
              )}
              href={`/faq`}
            >
              {"Faq"}
            </a>
          </p.Stack>
        ) : null}
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__rakGx)}
        >
          <IconLink
            data-plasmic-name={"iconLink"}
            data-plasmic-override={overrides.iconLink}
            className={classNames("__wab_instance", sty.iconLink)}
            icon={
              <React.Fragment>
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__smplF)}
                  role={"img"}
                />

                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"0"}
                </div>
              </React.Fragment>
            }
          />
        </p.Stack>
      </p.Stack>
      {(
        hasVariant($state, "expanded", "expanded") &&
        hasVariant(globalVariants, "screen", "mobile")
          ? true
          : true
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__duzl6, {
            [sty.freeBoxexpanded__duzl6JNh9I]: hasVariant(
              $state,
              "expanded",
              "expanded"
            )
          })}
        >
          <LinkButton
            className={classNames("__wab_instance", sty.linkButton___5G9VS)}
            text={"Home"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton___0Dyr3)}
            text={"New Arrival"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__op3SR)}
            text={"Features"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__sbVyZ)}
            text={"Blog"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__mL1Vj)}
            text={"Contact"}
            type={"blankGray"}
          />
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "menuButton", "iconLink", "text"],
  menuButton: ["menuButton"],
  iconLink: ["iconLink", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuButton: makeNodeComponent("menuButton"),
    iconLink: makeNodeComponent("iconLink"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
